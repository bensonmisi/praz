<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\accounttype;
use App\company;
use App\Notifications\activation;
use App\User;
use Illuminate\Support\Facades\DB;
class RegisterController extends Controller
{
    public function index(){
          $countrylist =['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', ' Bahrain', ' Bangladesh', ' Barbados', ' Belarus', ' Belgium', ' Belize', ' Benin', ' Bermuda', ' Bhutan', ' Bolivia', ' Bosnia and Herzegovina', ' Botswana', ' Bouvet Island', ' Brazil', ' British Indian Ocean Territory', ' Brunei Darussalam', ' Bulgaria', ' Burkina Faso', ' Burundi', ' Cambodia', ' Cameroon', ' Canada', ' Cape Verde', ' Cayman Islands', ' Central African Republic', ' Chad', ' Chile', ' China', ' Christmas Island', ' Cocos (Keeling Islands)', ' Colombia', ' Comoros', ' Congo', ' Cook Islands', ' Costa Rica', ' Cote D Ivoire (Ivory Coast)', ' Croatia (Hrvatska', ' Cuba', ' Cyprus', ' Czech Republic', ' Denmark', ' Djibouti', ' Dominica', ' Dominican Republic', ' East Timor', ' Ecuador', ' Egypt', ' El Salvador', ' Equatorial Guinea', ' Eritrea', ' Estonia', ' Ethiopia', ' Falkland Islands (Malvinas)', ' Faroe Islands', ' Fiji', ' Finland', ' France', ' France', ' Metropolitan', ' French Guiana', ' French Polynesia', ' French Southern Territories', ' Gabon', ' Gambia', ' Georgia', ' Germany', ' Ghana', ' Gibraltar', ' Greece', ' Greenland', ' Grenada', ' Guadeloupe', ' Guam', ' Guatemala', ' Guinea', ' Guinea-Bissau', ' Guyana', ' Haiti', ' Heard and McDonald Islands', ' Honduras', ' Hong Kong', ' Hungary', ' Iceland', ' India', ' Indonesia', ' Iran', ' Iraq', ' Ireland', ' Israel', ' Italy', ' Jamaica', ' Japan', ' Jordan', ' Kazakhstan', ' Kenya', ' Kiribati', ' Korea (North)', ' Korea (South)', ' Kuwait', ' Kyrgyzstan', ' Laos', ' Latvia', ' Lebanon', ' Lesotho', ' Liberia', ' Libya', ' Liechtenstein', ' Lithuania', ' Luxembourg', ' Macau', ' Macedonia', ' Madagascar', ' Malawi', ' Malaysia', ' Maldives', ' Mali', ' Malta', ' Marshall Islands', ' Martinique', ' Mauritania', ' Mauritius', ' Mayotte', ' Mexico', ' Micronesia', ' Moldova', ' Monaco', ' Mongolia', ' Montserrat', ' Morocco', ' Mozambique', ' Myanmar', ' Namibia', ' Nauru', ' Nepal', ' Netherlands', ' Netherlands Antilles', ' New Caledonia', ' New Zealand', ' Nicaragua', ' Niger', ' Nigeria', ' Niue', ' Norfolk Island', ' Northern Mariana Islands', ' Norway', ' Oman', ' Pakistan', ' Palau', ' Panama', ' Papua New Guinea', ' Paraguay', ' Peru', ' Philippines', ' Pitcairn', ' Poland', ' Portugal', ' Puerto Rico', ' Qatar', ' Reunion', ' Romania', ' Russian Federation', ' Rwanda', ' Saint Kitts and Nevis', ' Saint Lucia', ' Saint Vincent and The Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Seychelles', 'Sierra Leone', ' Singapore', ' Slovak Republic', ' Slovenia', ' Solomon Islands', ' Somalia', ' South Africa', ' S. Georgia and S. Sandwich Isls.', ' Spain', ' Sri Lanka', ' St. Helena', 'St. Pierre and Miquelon', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen Islands', ' Swaziland', ' Sweden', ' Switzerland', ' Syria', ' Taiwan', ' Tajikistan', ' Tanzania', ' Thailand', ' Togo', ' Tokelau', ' Tonga', ' Trinidad and Tobago', ' Tunisia', ' Turkey', ' Turkmenistan', ' Turks and Caicos Islands', ' Tuvalu', ' Uganda', ' Ukraine', ' United Arab Emirates', ' United Kingdom (Britain / UK)', ' United States of America (USA)', ' US Minor Outlying Islands', ' Uruguay', ' Uzbekistan', ' Vanuatu', ' Vatican City State (Holy See)', ' Venezuela', ' Viet Nam', ' Virgin Islands (British)', 'Virgin Islands (US)', 'Wallis and Futuna Islands', 'Western Sahara', 'Yemen', 'Yugoslavia', 'Zaire', ' Zambia', 'Zimbabwe'];
         $types = accounttype::get();
  return view('register',compact('countrylist','types'));
     }

     public function store(Request $request){
        $request->validate(['name'=>'required',
            'surname'=>'required',
            'phone'=>'required',
            'email'=>'required|email|unique:users,email',
            'password'=>'required|min:8|confirmed',
            'company'=>'required',
            'sector'=>'required',
            'city'=>'required',
            'country'=>'required',
            'address'=>'required',
            'accounttype'=>'required',
            'province'=>'required_if:country,Zimbabwe',
            'district'=>'required_if:country,Zimbabwe'
            ]);
            $check = $this->check_company($request->company);
            if($check==0)
            {
                $locality ="";
                if($request->country==='Zimbabwe')
                  {
                      $locality = "local";
                  }else{
                      $locality ="foreign";
                  }
                $company = company::create([
                    'regnumber'=>$this->regnumber(),
                    'name'=>$request->company,
                    'sector'=>$request->sector,
                    'accounttype_id'=>$request->accounttype,
                    'city'=>$request->city,
                    'country'=>$request->country,
                    'locality'=>$locality,
                    'province'=>$request->province,
                    'district'=>$request->district
                ]);

                User::create([
                            'name'=>$request->name,
                            'surname'=>$request->surname,
                            'email'=>$request->email,
                            'company_id'=>$company->id,
                            'phone'=>$request->phone,
                            'role_id'=>'9',
                            'authcode'=>rand(100,1000),
                            'status'=>'PENDING',
                            'password'=>$request->password
                            ]);
                session()->flash('message', 'Successfully Created Your Account  Please Login');
            return redirect()->route('login');
            }else{

                $user = User::wherecompany_id($check)->first();
                if(!is_null($user))
                  {
                    if(is_null($user->authcode))
                       {
                         $user->authcode = rand(100,1000);
                         $user->save();

                       }
                       $user->notify(new activation($user->email,$user->authcode));
                    session()->flash('message','Company Name Already In Our System. We Have sent through your activation details on: '.$user->email); 
                    return redirect()->back();
                }else{
                    session()->flash('message', 'Company Name Already In Our System. We failed to find any user details please contact our IT to correct this error'); 
                    return redirect()->back();
                }
                
            }

     }
     function check_company($name){
        $cleanname =  preg_replace('/\s+/', '', $name);
        $cleanname = str_ireplace('(Private)Limited','',$cleanname);
        $cleanname = str_ireplace('P/L','',$cleanname);
        $cleanname = str_ireplace('PrivateLimited','',$cleanname);
        $cleanname = str_ireplace('Investments','',$cleanname);
        $cleanname = str_ireplace('Investment','',$cleanname);
        $cleanname = str_ireplace('Pvtltd','',$cleanname);
        $first_three_letters = substr($cleanname,0,4);
        $customers =  DB::select("select * from companies where name LIKE '%".$first_three_letters."%'");
         if(count($customers)>0)
         {
            foreach ($customers as $key => $value) {
                //$request_array = str_split(strtoupper($cleanname));
                $db_name = preg_replace('/\s+/', '', $value->name);
                $db_name = str_ireplace('(Private)Limited','',$db_name);
                $db_name = str_ireplace('P/L','',$db_name);
                $db_name = str_ireplace('PrivateLimited','',$db_name);
                $db_name = str_ireplace('Investments','',$db_name);
                $db_name = str_ireplace('Investment','',$db_name);
                $db_name = str_ireplace('Pvtltd','',$db_name);
                $compare = strcasecmp(strtoupper($cleanname),strtoupper(preg_replace('/\s+/', '', $db_name)));
                  if($compare==0)
                    {
                        return $value->id;
                    }
                   
                                 
            } 
            return 0;
         }

    }

    function regnumber(){
        $company = count(company::get());
        return "PR".\Carbon\Carbon::now()->micro."".($company+1);
    }
}
