import { useGetProductField } from "@/api/getProductField";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FilterTypes } from "@/types/filters";

type FilterOrigenProps = {
    setFilterorigen: (origen: string) => void
}

const FilterOrigen = (props: FilterOrigenProps) => {
    const { setFilterorigen } = props;
    const { result, loading }: FilterTypes = useGetProductField()

    return (
        <div className="my-3">
            <p className="mb-2 font-bold">Plataforma</p>
            {loading && result === null && (
                <p>Cargando plataforma...</p>
            )}

            <RadioGroup onValueChange={(value) => setFilterorigen(value === "ninguna" ? "" : value)}>
                <div key="ninguna" className="flex items-center space-x-2">
                    <RadioGroupItem value="ninguna" id="ninguna" />
                    <Label htmlFor="ninguna">Ninguna selección</Label>
                </div>
                {result !== null && result.schema.attributes.origin.enum.map((origen: string) => (
                    <div key={origen} className="flex items-center space-x-2">
                        <RadioGroupItem value={origen} id={origen} />
                        <Label htmlFor={origen}>{origen}</Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
}

export default FilterOrigen;
