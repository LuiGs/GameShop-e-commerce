import { useGetProductField } from "@/api/getProductField";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FilterTypes } from "@/types/filters";

type FiltergeneroProps = {
    setFiltergenero: (genero: string) => void
}

const Filtergenero = (props: FiltergeneroProps) => {
    const { setFiltergenero } = props;
    const { result, loading }: FilterTypes = useGetProductField()

    return (
        <div className="my-0">
            <p className="mb-2 font-bold">Género</p>
            {loading && result === null && (
                <p>Cargando género...</p>
            )}

            <RadioGroup onValueChange={(value) => setFiltergenero(value === "ninguna" ? "" : value)}>
                <div key="ninguna" className="flex items-center space-x-2">
                    <RadioGroupItem value="ninguna" id="ninguna" />
                    <Label htmlFor="ninguna">Ninguna selección</Label>
                </div>
                {result !== null && result.schema.attributes.genero.enum.map((genero: string) => (
                    <div key={genero} className="flex items-center space-x-2">
                        <RadioGroupItem value={genero} id={genero} />
                        <Label htmlFor={genero}>{genero}</Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
}


export default Filtergenero;