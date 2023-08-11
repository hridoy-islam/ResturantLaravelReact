<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Edit Menu') }}
        </h2>
    </x-slot>

    <div class="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
        <form action="{{ route('menu.update', $menu->id) }}" method="put">
            @csrf
            <div>

                <x-input-label for="name" value="Menu Name" />
                <x-text-input id="name" name="name" type="text" class="mt-1 block w-full"
                    value="{{ $menu->name }}" required autofocus />
                <x-input-error class="mt-2" :messages="$errors->get('name')" />
            </div>
            <div>
                <x-input-label for="calories" value="Calories" />
                <x-text-input id="calories" name="calories" type="text" class="mt-1 block w-full"
                    value="{{ $menu->calories }}" required autofocus />
                <x-input-error class="mt-2" :messages="$errors->get('calories')" />
            </div>

            <div>
                <x-input-label for="protein" value="Protein" />
                <x-text-input id="protein" name="protein" type="text" class="mt-1 block w-full"
                    value="{{ $menu->protein }}" required autofocus />
                <x-input-error class="mt-2" :messages="$errors->get('protein')" />
            </div>

            <div>
                <x-input-label for="carb" value="Carb" />
                <x-text-input id="carb" name="carb" type="text" class="mt-1 block w-full"
                    value="{{ $menu->carb }}" required autofocus />
                <x-input-error class="mt-2" :messages="$errors->get('carb')" />
            </div>

            <div>
                <x-input-label for="fat" value="Fat" />
                <x-text-input id="fat" name="fat" type="text" class="mt-1 block w-full"
                    value="{{ $menu->fat }}" required autofocus />
                <x-input-error class="mt-2" :messages="$errors->get('fat')" />
            </div>

            <div>
                <x-input-label for="menu_image" value="Menu Image" />
                <label class="block mt-2">
                    <span class="sr-only">Choose image</span>
                    <input type="file" id="menu_image" name="menu_image"
                        class="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-violet-700
                        hover:file:bg-violet-100
                    " />
                </label>
                <div class="shrink-0 my-2">
                    <img id="image_preview" class="h-64 w-128 object-cover rounded-md"
                        src="{{ isset($menu) ? $menu->menu_image : '' }}" alt="Image preview" />
                </div>
                <x-input-error class="mt-2" :messages="$errors->get('menu_image')" />
            </div>

            <x-primary-button>Update</x-primary-button>
        </form>
    </div>


    <script>
        // create onchange event listener for featured_image input
        document.getElementById('menu_image').onchange = function(evt) {
            const [file] = this.files
            if (file) {
                // if there is an image, create a preview in featured_image_preview
                document.getElementById('image_preview').src = URL.createObjectURL(file)
            }
        }
    </script>


</x-app-layout>
