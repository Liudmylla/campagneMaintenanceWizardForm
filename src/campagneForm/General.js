import React, { Fragment, useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import { useHistory } from "react-router-dom";
import { useData } from "../DataContext";
import { Controller, useForm } from "react-hook-form";
import BootstrapInput from "./BootstrapInput";

import { Form } from "../components/Form";
import {
    FormControlLabel,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
    Radio,
    RadioGroup, FormControl
} from "@material-ui/core";

const generationInterventionData = [
    { value: "7", label: "1 intervention par objet" },
    { value: "8", label: "1 intervention par regroupement" },
    { value: "9", label: "1 intervention par N objets" }
];
const General = () => {
    const { setValues, data } = useData()
    const history = useHistory()
    const { register, handleSubmit, control, errors } = useForm({})

    const [selectedDate, setSelectedDate] = useState(new Date());

    const onSubmit = () => {
        history.push("./general")
        setValues({ ...data, selectedDate })
    }
    return (
        <Fragment>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Grid >
                    <InputLabel shrink htmlFor="libelle" required>
                        Libelle
                    </InputLabel>
                    <TextField
                        fullWidth
                        required
                        variant="outlined"
                        ref={register}
                        id="libelle"
                        type="text"
                        name="libelle"
                        error={!!errors.libelle}
                        helperText={errors?.libelle?.message}
                    />
                </Grid>

                <Grid >
                    <InputLabel shrink htmlFor="description" >
                        Description
                    </InputLabel>
                    <TextField
                        fullWidth
                        variant="outlined"
                        ref={register}
                        id="description"
                        type="text"
                        name="description"
                    />
                </Grid>
                <Grid >
                    <InputLabel shrink htmlFor="dateCloture" >
                        Date Clôture
                    </InputLabel>

                    <DatePicker
                        variant="inline"
                        inputVariant="outlined"
                        autoOk
                        format="dd/MM/yyyy"
                        name='dateCloture'
                        id='dateCloture'
                        value={selectedDate}
                        onChange={(newValue) => {
                            setSelectedDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />

                </Grid>
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
                                    <MenuItem value={item.value}>{item.label}</MenuItem>
                                ))}
                            </Select>
                        }
                    />
                </Grid>
                <Typography variant="h5" mb={2}>
                    Durée
                </Typography>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="unite" required>Unité</InputLabel>
                    <Select
                        fullWidth
                        required
                        labelId="unite"
                        id="unite"
                        // value={age}
                        label="Unité"
                        input={<BootstrapInput />}
                    // onChange={handleChange}
                    >
                        {/* <MenuItem value="">
                            <em>None</em>
                        </MenuItem> */}
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>

                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <TextField
                        required
                        label='Qté'
                        variant="outlined"
                        ref={register}
                        id="qte"
                        type="number"
                        name="qte"

                    />
                </FormControl>
                <Typography variant="h5" mb={2}>
                    Reccurence
                </Typography>



            </Form>
        </Fragment>
    )


}
export default General