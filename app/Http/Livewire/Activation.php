<?php

namespace App\Http\Livewire;

use App\User;
use Livewire\Component;

class Activation extends Component
{
    public $country =['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', ' Bahrain', ' Bangladesh', ' Barbados', ' Belarus', ' Belgium', ' Belize', ' Benin', ' Bermuda', ' Bhutan', ' Bolivia', ' Bosnia and Herzegovina', ' Botswana', ' Bouvet Island', ' Brazil', ' British Indian Ocean Territory', ' Brunei Darussalam', ' Bulgaria', ' Burkina Faso', ' Burundi', ' Cambodia', ' Cameroon', ' Canada', ' Cape Verde', ' Cayman Islands', ' Central African Republic', ' Chad', ' Chile', ' China', ' Christmas Island', ' Cocos (Keeling Islands)', ' Colombia', ' Comoros', ' Congo', ' Cook Islands', ' Costa Rica', ' Cote D Ivoire (Ivory Coast)', ' Croatia (Hrvatska', ' Cuba', ' Cyprus', ' Czech Republic', ' Denmark', ' Djibouti', ' Dominica', ' Dominican Republic', ' East Timor', ' Ecuador', ' Egypt', ' El Salvador', ' Equatorial Guinea', ' Eritrea', ' Estonia', ' Ethiopia', ' Falkland Islands (Malvinas)', ' Faroe Islands', ' Fiji', ' Finland', ' France', ' France', ' Metropolitan', ' French Guiana', ' French Polynesia', ' French Southern Territories', ' Gabon', ' Gambia', ' Georgia', ' Germany', ' Ghana', ' Gibraltar', ' Greece', ' Greenland', ' Grenada', ' Guadeloupe', ' Guam', ' Guatemala', ' Guinea', ' Guinea-Bissau', ' Guyana', ' Haiti', ' Heard and McDonald Islands', ' Honduras', ' Hong Kong', ' Hungary', ' Iceland', ' India', ' Indonesia', ' Iran', ' Iraq', ' Ireland', ' Israel', ' Italy', ' Jamaica', ' Japan', ' Jordan', ' Kazakhstan', ' Kenya', ' Kiribati', ' Korea (North)', ' Korea (South)', ' Kuwait', ' Kyrgyzstan', ' Laos', ' Latvia', ' Lebanon', ' Lesotho', ' Liberia', ' Libya', ' Liechtenstein', ' Lithuania', ' Luxembourg', ' Macau', ' Macedonia', ' Madagascar', ' Malawi', ' Malaysia', ' Maldives', ' Mali', ' Malta', ' Marshall Islands', ' Martinique', ' Mauritania', ' Mauritius', ' Mayotte', ' Mexico', ' Micronesia', ' Moldova', ' Monaco', ' Mongolia', ' Montserrat', ' Morocco', ' Mozambique', ' Myanmar', ' Namibia', ' Nauru', ' Nepal', ' Netherlands', ' Netherlands Antilles', ' New Caledonia', ' New Zealand', ' Nicaragua', ' Niger', ' Nigeria', ' Niue', ' Norfolk Island', ' Northern Mariana Islands', ' Norway', ' Oman', ' Pakistan', ' Palau', ' Panama', ' Papua New Guinea', ' Paraguay', ' Peru', ' Philippines', ' Pitcairn', ' Poland', ' Portugal', ' Puerto Rico', ' Qatar', ' Reunion', ' Romania', ' Russian Federation', ' Rwanda', ' Saint Kitts and Nevis', ' Saint Lucia', ' Saint Vincent and The Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Seychelles', 'Sierra Leone', ' Singapore', ' Slovak Republic', ' Slovenia', ' Solomon Islands', ' Somalia', ' South Africa', ' S. Georgia and S. Sandwich Isls.', ' Spain', ' Sri Lanka', ' St. Helena', 'St. Pierre and Miquelon', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen Islands', ' Swaziland', ' Sweden', ' Switzerland', ' Syria', ' Taiwan', ' Tajikistan', ' Tanzania', ' Thailand', ' Togo', ' Tokelau', ' Tonga', ' Trinidad and Tobago', ' Tunisia', ' Turkey', ' Turkmenistan', ' Turks and Caicos Islands', ' Tuvalu', ' Uganda', ' Ukraine', ' United Arab Emirates', ' United Kingdom (Britain / UK)', ' United States of America (USA)', ' US Minor Outlying Islands', ' Uruguay', ' Uzbekistan', ' Vanuatu', ' Vatican City State (Holy See)', ' Venezuela', ' Viet Nam', ' Virgin Islands (British)', 'Virgin Islands (US)', 'Wallis and Futuna Islands', 'Western Sahara', 'Yemen', 'Yugoslavia', 'Zaire', ' Zambia', 'Zimbabwe'];
    public $form=[
         'name'=>'',
         'surname'=>'',
         'phone'=>'',
         'password'=>'',
         'password_confirmation'=>'',
         'company'=>'',
         'sector'=>'',
         'city'=>'',
         'country'=>'',
         'address'=>'',
         'accounttype'=>'',
         'province'=>'',
         'district'=>''];
    public $showform = true;
    public $showactivation=false;
    public $code;
    public $email;

    public function verify(){
      $this->validate(['email'=>'required|email|exists:users','code'=>'required|integer']);
      $user = User::where(['email'=>$this->email,'authcode'=>$this->code])->first();
      if($user)
        {
          if($user->status ==='PENDING'){
            $this->showform = false;
            $this->showactivation = true;
          }else{
            session()->flash('error','Account already activated please login');
            return redirect()->route('login');
            }
        }else{
            session()->flash('error','Activation details invalid please try again');
        }
    }

    public function submit(){
        $this->validate([
            'form.name'=>'required',
            'form.surname'=>'required',
            'form.phone'=>'required',
            'form.password'=>'required|min:8|confirmed',
            'form.sector'=>'required',
            'form.city'=>'required',
            'form.country'=>'required',
            'form.address'=>'required',
            'form.province'=>'required|exclude_unless:country,Zimbabwe',
            'form.district'=>'required|exclude_unless:country,Zimbabwe'
            ]);
            $user = User::where(['email'=>$this->email,'authcode'=>$this->code])->first();
            if(!is_null($user)){
                $user->name = $this->form['name'];
                $user->surname = $this->form['surname'];
                $user->phone = $this->form['phone'];
                $user->password = $this->form['password'];
                $user->status = 'ACTIVATED';
                $user->save();
                $company = $user->company;
                $company->city = $this->form['city'];
                $company->country = $this->form['country'];
                $company->province = $this->form['province'];
                $company->district = $this->form['district'];
                $company->save();
                session()->flash('message','Successfuly Activated Account Please Login');
                return redirect()->route('login');
            }else{
            session()->flash('error','Activation details invalid please try again');
        }
    }
    public function render()
    {
        return view('livewire.activation');
    }
}
