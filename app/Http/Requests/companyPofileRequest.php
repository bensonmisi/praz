<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class companyPofileRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
               'city'=>'required',
               'country'=>'required',
               'accounttype'=>'required',
               'email'=>'required',
               'phone'=>'required',
               'address'=>'required'
        ];
    }
}