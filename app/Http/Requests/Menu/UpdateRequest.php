<?php

namespace App\Http\Requests\Menu;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'name|string|min:3|max:250',
            'calories' => 'required',
            'protein' => 'required',
            'carb' => 'required',
            'fat' => 'required',
            'menu_image' => 'required|image|max:1024|mimes:jpg,jpeg,png',
        ];
    }
}
