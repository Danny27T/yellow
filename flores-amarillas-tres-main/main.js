onload = () =>{
    document.body.classList.remove("container");

    // Seleccionar todas las miniaturas
    const thumbnails = document.querySelectorAll('.thumbnail');

    // Añadir el evento de clic para ampliar las imágenes
    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener('click', () => {
            // Si la imagen ya está ampliada, la vuelve a su tamaño original
            if (thumbnail.classList.contains('enlarged')) {
                thumbnail.classList.remove('enlarged');
            } else {
                // Primero quita la ampliación de cualquier otra imagen
                thumbnails.forEach(img => img.classList.remove('enlarged'));
                // Ampliar la imagen seleccionada
                thumbnail.classList.add('enlarged');
            }
        });
    });

};