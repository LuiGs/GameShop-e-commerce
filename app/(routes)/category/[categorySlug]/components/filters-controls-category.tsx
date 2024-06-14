import Filtergenero from "./filter-genero";


type FiltersControlsCategoryProps = {
    setFiltergenero: (genero: string) => void
}

const FiltersControlsCategory = (props: FiltersControlsCategoryProps) => {
    const { setFiltergenero } = props

    return (
        <div className="sm:w-[350px] sm:mt-2 p-1">
            <Filtergenero setFiltergenero={setFiltergenero} />
        </div>
    );
}

export default FiltersControlsCategory;