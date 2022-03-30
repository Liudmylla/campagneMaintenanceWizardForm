import React from 'react';
import Draggable from 'react-draggable'
import { useHistory, Link } from "react-router-dom";
import { useData } from "../DataContext";
import { Controller, useForm } from "react-hook-form";
import { Form } from "../components/Form";
import { PrimaryButton } from '../components/PrimaryButton';
import { SecondaryButton } from '../components/SecondaryButton';
import {
    MenuItem, Select,
    Box,
    Grid,
    InputLabel, Paper, styled,
    Typography, Button,
} from "@material-ui/core";

import BootstrapInput from './BootstrapInput';
import { MainContainer } from '../components/MainContainer';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    height: '10rem',
    color: theme.palette.text.secondary,
}));


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
        defaultValues: { typeSignalement: data.typeSignalement, typeIntervention: data.typeIntervention },
        mode: "onBlur",
    });
    const onSubmit = (data) => {
        history.push("./addfiles");
        setValues(data);
    };

    return (
        <MainContainer>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Typography  >
                    Regroupements *
                </Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Item>
                            <Typography >
                                Non utilisés
                            </Typography>
                            <Draggable >

                                <Box maxWidth={130} border=' 0.1rem solid grey' padding={0.5} marginTop={2}>
                                    EMPRISE
                                </Box>

                            </Draggable>
                            <Draggable  >
                                <Box maxWidth={130} border=' 0.1rem solid grey' padding={0.5} marginTop={2} marginBottom={2}>
                                    ALIMENTATION
                                </Box>
                            </Draggable>
                        </Item>
                    </Grid>

                    <Grid item xs={6}>
                        <Item>
                            <Typography >
                                Utilisés
                            </Typography>
                            <Draggable axis='x' >
                                <Box maxWidth={130} border=' 0.1rem solid grey' padding={0.5} marginTop={2} marginBottom={2}>
                                    LOT
                                </Box>
                            </Draggable>
                        </Item>

                    </Grid>

                </Grid>
                <Grid item xs={12}>
                    <Typography mb={2}>
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
                                    <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
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
                        name="typeIntervention"
                        as={
                            <Select id="typeIntervention" name="typeIntervention" ref={register}
                                input={<BootstrapInput />}
                            >
                                {interventionData.map((item) => (
                                    <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
                                ))}
                            </Select>
                        }
                    />
                </Grid>
                <Typography mb={2}>
                    Travaux réalisés (issus de la couche de recherche)
                </Typography>
                <Button variant="contained">+Ajouter un travail</Button>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <SecondaryButton ><Link to="/recherche" style={{ textDecoration: 'none' }}>Back</Link></SecondaryButton>
                    </Grid>
                    <Grid item xs={6}>
                        <PrimaryButton>Next</PrimaryButton>
                    </Grid>
                </Grid>
            </Form>
        </MainContainer>
    );
};
export default Regroupement
