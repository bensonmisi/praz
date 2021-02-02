<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AccountCreationRequest extends FormRequest
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
            'name'=>'required',
            'surname'=>'required',
            'phone'=>'required',
            'email'=>'required|email|unique:users,email',
            'password'=>'required|min:8|confirmed',
            'company'=>'required',
            'accounttype'=>'required',
            'city'=>'required',
            'country'=>'required',
            'accounttype'=>'required',
            'province'=>'required_if:country,Zimbabwe',
            'district'=>'required_if:country,Zimbabwe'
        ];
    }
}
