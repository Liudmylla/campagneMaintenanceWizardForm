import React from 'react';
import Draggable from 'react-draggable'
import { useHistory } from "react-router-dom";
import { useData } from "../DataContext";
import { Controller, useForm } from "react-hook-form";
import { Form } from "../components/Form";
import {
    MenuItem, Select,
    Box,
    Grid,
    InputLabel,
    TextField,
    Typography, Button, styled, InputBase
} from "@material-ui/core";

import BootstrapInput from './BootstrapInput';


const signalementData = [
    { value: "1", label: "Type 1" },
    { value: "2", label: "Type 2" },
    { value: "3", label: "Type 3" }
];
const interventionData = [
    { value: "4", label: "Type 4" },
    { value: "5", label: "Type 5" },
    { value: "6", label: "Type 6" }
];

const Regroupement = () => {
    const { setValues, data } = useData();
    const history = useHistory();
    const { register, handleSubmit, control } = useForm({

    });
    const onSubmit = () => {
        history.push("./regroupement");
        setValues(data);
    };

    return (
        <React.Fragment>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Grid >   <Typography variant="h5" >
                    Regroupements *
                </Typography>

                    <Draggable axis='x' >

                        <Box maxWidth={100} border=' 0.1rem solid grey' padding={0.5} marginTop={2}>
                            ITEM 1
                        </Box>
                    </Draggable>
                    <Draggable axis='x' >

                        <Box maxWidth={100} border=' 0.1rem solid grey' padding={0.5} marginTop={2} marginBottom={2}>
                            ITEM 2
                        </Box>
                    </Draggable>
                    <Draggable axis='x' >

                        <Box maxWidth={100} border=' 0.1rem solid grey' padding={0.5} marginTop={2} marginBottom={2}>
                            ITEM 3
                        </Box>
                    </Draggable>
                    <Draggable axis='x' >

                        <Box maxWidth={100} border=' 0.1rem solid grey' padding={0.5} marginTop={2} marginBottom={2}>
                            ITEM 4
                        </Box>
                    </Draggable>

                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" mb={2}>
                        Associations par défault
                    </Typography>
                    <InputLabel htmlFor="typeSignalement" required>
                        Type de signalement
                    </InputLabel>
                    <Controller
                        control={control}
                        fullWidth
                        name="typeSignalement"
                        as={
                            <Select id="typeSignalement" name="typeSignalement" ref={register}
                                input={<BootstrapInput />}
                            >
                                {signalementData.map((item) => (
                                    <MenuItem value={item.value}>{item.label}</MenuItem>
                                ))}
                            </Select>
                        }
                    />

                </Grid>
                <Grid item xs={12}>
                    <InputLabel htmlFor="typeIntervention" required>
                        Type d'intervention
                    </InputLabel>
                    <Controller
                        control={control}
                        fullWidth
                        name="typeInterventionl"
                        as={
                            <Select id="typeIntervention" name="typeIntervention" ref={register}
                                input={<BootstrapInput />}
                            >
                                {interventionData.map((item) => (
                                    <MenuItem value={item.value}>{item.label}</MenuItem>
                                ))}
                            </Select>
                        }
                    />
                </Grid>
                <Typography variant="h5" mb={2}>
                    Travaux réalisés (issus de la couche de recherche)
                </Typography>
                <Button variant="contained">+Ajouter un travail</Button>
            </Form>
        </React.Fragment >
    );
};
export default Regroupement
