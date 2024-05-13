# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Estructura del proyecto
|_index.html
            |_src  
                |_main.jsx (Realiza el llamado a las Apps para generar la estructura del main)
                |_App.jsx (Llama a las apps necesarias dentro de  componetes para generar el index, entre las cuales se encuentran  Header.jsx, Main.jsx y Footer.jsx)
                |_AppJocks.jsx (Llama a las apps necesarias para generar el la página de los jugadores, finalmente no se construyo o esta en desarrollo)
                |_AppStore.jsx (Llama a las apps necesarias en components para generar la tienda, llama el Header.jsx, MainStore.jsx y Footer.jsx)
                    |_COMPONENTS
                                |_Main.jsx (Continene la función que direcciona o rutea al usuario hacia las diferentes páginas)
                                |_MainJocks.jsx (Encargado presentar a los deportistas, ya no se utiliza)
                                |_MainStore.jsx (Encargado presentar a los deportistas, ya no se utiliza)
                    |_pages
                            |_Error.jsx (Renderiza la página de error cuando se busca una página que no existe)
                            |_Home.jsx (Renderiza la página principal)
                            |_ItemListContainer (Renderiza la página de los productos)
                            |_ItemDetailContainer (Renderiza la página de los detalles de un producto determinado)

