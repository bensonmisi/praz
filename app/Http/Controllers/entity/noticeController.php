<?php

namespace App\Http\Controllers\entity;

use App\Http\Controllers\Controller;
use App\pbondcap;
use App\pnotice;
use App\pnotice_category;
use App\pnotice_products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use PhpParser\Node\Stmt\Foreach_;
use serviceHelper;

class noticeController extends Controller
{

    public function store(Request $request){
        $request->validate(['tendernumber'=>'required|unique:pnotices,tendernumber',
                             'type'=>'required',
                              'currency'=>'required',
                              'procurementtype'=>'required',
                              'date'=>'required',
                               'classification'=>'required',
                               'period'=>'required',
                                'bid'=>'required',
                               'bond'=>'required',
                               'email'=>'required',
                               'description'=>'required',
                               'categories'=>'required',
                               'products'=>'required']);
        $service = new serviceHelper();
                               /** check if the  bid bond value is  less the  bidbond cap */
                            //dd($this->period);
        $bidcap = pbondcap::first();     
        $bid_bond_cap = $request->bid * ($bidcap->value/100);
        if($request->bond <= $bid_bond_cap)
        {
        
            $path = $request->file('file')->store('biddocuments');
            $notice= pnotice::create([
                'tendernumber'=>$request->tendernumber,
                'description'=>$request->description,
                'close_date'=>$request->date,
                'pclassification_id'=>$request->classification,
                'currency_id'=>$request->currency,
                'bidbond'=>$request->bond,
                'bidvalue'=>$request->bid,
                'company_id'=>Auth::user()->company->id,
                'created_by'=>Auth::user()->id,
                'ptype_id'=>$request->type,
                'noticetype'=>$request->procurementtype,
                'email'=>$request->email,
                'file'=>$path,
                'period'=>$request->period
                ]);
        
                if(!is_null($notice)){
                 foreach ($request->products as $key => $value)
                  {
                      pnotice_products::create(['name'=>$value->name,'quantity'=>$value->quantity,'pnotice_id'=>$notice->id]);  
                  }

                  foreach ($request->categories as $key => $value) {
                      pnotice_category::create(['pnotice_id'=>$notice->id,'category_id'=>$value->id]);
                  }
                }

                return response()->json(['message'=>'Notice successfully create'],200);
        }
        else{
        return response()->json(['message'=>'Bid Bond Should be less than '.$bidcap->value.'% of the bid value. Bid bond inputed is above the cap'],500);
        }


        
    }
    }
