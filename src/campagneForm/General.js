import React, { Fragment, useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import { useHistory } from "react-router-dom";
import { useData } from "../DataContext";
import { Controller, useForm } from "react-hook-form";
import BootstrapInput from "./BootstrapInput";
import { PrimaryButton } from "../components/PrimaryButton";
import { Form } from "../components/Form";
import { Input } from "../components/Input";

import {

    Grid,
    InputLabel,
    MenuItem,
    Select,

    Typography,

} from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/dist";
import * as yup from "yup";
import { MainContainer } from "../components/MainContainer";

const generationInterventionData = [
    { value: "7", label: "1 intervention par objet" },
    { value: "8", label: "1 intervention par regroupement" },
    { value: "9", label: "1 intervention par N objets" }
];
const unites = [
    { value: "heure", label: "Heure" },
    { value: "jour", label: "Jour" },
    { value: "semaine", label: "Semaine" },
    { value: "mois", label: "Mois" },
    { value: "année", label: "Année" },
];
const schema = yup.object().shape({
    libelle: yup
        .string()
        //  .matches(/^([^0-9]*)$/, "Libelle ne doit pas contenir de chiffres")
        .required("Libelle est un champ obligatoire"),
    // lastName: yup
    //   .string()
    //   .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    //   .required("Last name is a required field"),
});
const General = () => {
    const { setValues, data } = useData()
    const history = useHistory()
    const { register, handleSubmit, control, errors } = useForm({
        defaultValues: { libelle: data.libelle, description: data.description },
        mode: "onBlur",
        resolver: yupResolver(schema),
    })

    const [selectedDate, setSelectedDate] = useState(new Date());

    const onSubmit = (data) => {
        history.push("./recherche")
        setValues({ ...data, selectedDate })
    }
    return (
        <MainContainer>
            <Form onSubmit={handleSubmit(onSubmit)}>

                <Input
                    ref={register}
                    id="libelle"
                    type="text"
                    label="Libelle *"
                    name="libelle"
                    error={!!errors.libelle}
                    helperText={errors?.libelle?.message}
                />

                <Input
                    ref={register}
                    id="description"
                    type="text"
                    label="Description"
                    name="description"

                />

                <DatePicker
                    variant="inline"
                    inputVariant="outlined"
                    autoOk
                    format="dd/MM/yyyy"
                    name='dateCloture'
                    label='Date Clôture'
                    id='dateCloture'
                    value={selectedDate}
                    onChange={(newValue) => {
                        setSelectedDate(newValue);
                    }}
                    renderInput={(params) => <Input {...params} />}
                />

                <Grid item xs={12}>
                    <InputLabel htmlFor="generationIntervention" required>
                        Génération des interventions
                    </InputLabel>
                    <Controller
                        control={control}
                        fullWidth
                        name="generationIntervention"
                        as={
                            <Select id="generationIntervention" name="generationIntervention" ref={register}
                                input={<BootstrapInput />}
                            >
                                {generationInterventionData.map((item) => (
                                    <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
                                ))}
                            </Select>
                        }
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputLabel htmlFor="unite" required>
                        Durée
                    </InputLabel>
                    <Controller
                        control={control}
                        fullWidth
                        name="unite"
                        as={
                            <Select id="unite" name="unite" ref={register}
                                input={<BootstrapInput />}
                            >
                                {unites.map((item) => (
                                    <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
                                ))}
                            </Select>
                        }
                    />
                </Grid>



                <Input
                    required
                    label='Qté'
                    variant="outlined"
                    ref={register}
                    id="qte"
                    type="number"
                    name="qte"
                />
                <Typography mb={2}>
                    Reccurence
                </Typography>

                <PrimaryButton>Next</PrimaryButton>

            </Form>
        </MainContainer>
    )


}
export default General