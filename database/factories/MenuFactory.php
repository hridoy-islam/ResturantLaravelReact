<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Menu>
 */
class MenuFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'calories' => fake()->numberBetween($min = 100, $max = 500),
            'protein' => fake()->numberBetween($min = 100, $max = 500),
            'carb' => fake()->numberBetween($min = 100, $max = 500),
            'fat' => fake()->numberBetween($min = 100, $max = 500),
            'menu_image'=> fake()->imageUrl($width = 640, $height = 480),
        ];
    }
}
