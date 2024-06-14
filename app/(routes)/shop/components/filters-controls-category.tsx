import Filtergenero from "./filter-genero";
import FilterOrigen from "./filter-origin"; // Importa el nuevo componente

type FiltersControlsCategoryProps = {
    setFiltergenero: (genero: string) => void,
    setFilterorigen: (origen: string) => void // Añade el nuevo prop
}

const FiltersControlsCategory = (props: FiltersControlsCategoryProps) => {
    const { setFiltergenero, setFilterorigen } = props // Desestructura el nuevo prop

    return (
        <div className="sm:w-[350px] sm:mt-2 p-1">
            <Filtergenero setFiltergenero={setFiltergenero} />
            <FilterOrigen setFilterorigen={setFilterorigen} /> {/* Añade el nuevo componente */}
        </div>
    );
}

export default FiltersControlsCategory;
