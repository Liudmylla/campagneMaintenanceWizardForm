import React, { Fragment, useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import { useHistory } from "react-router-dom";
import { useData } from "../DataContext";
import { Controller, useForm } from "react-hook-form";


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
    RadioGroup
} from "@material-ui/core";

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

                    {/* <DatePicker
                        label="Date Clôture"
                        value={valueDate}
                        onChange={(newValue) => {
                            setValueDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    /> */}
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



            </Form>
        </Fragment>
    )


}
export default General