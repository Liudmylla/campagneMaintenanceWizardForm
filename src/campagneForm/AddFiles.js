import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useData } from "../DataContext";
import { MainContainer } from "../components/MainContainer";
import { FileInput } from "../components/FileInput";
import { PrimaryButton } from "../components/PrimaryButton";
import { SecondaryButton } from "../components/SecondaryButton";
import { Typography, Grid } from "@material-ui/core";
import { Form } from "../components/Form";


export const AddFiles = () => {
    const history = useHistory();
    const { data, setValues } = useData();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            files: data.files,
        },
    });

    const onSubmit = (data) => {
        history.push("./result");
        setValues(data);
    };

    return (
        <MainContainer>
            <Typography component="h2" variant="h5">
                Add files
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FileInput name="files" control={control} />
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6} >
                        <SecondaryButton ><Link to="/regroupement" style={{ textDecoration: 'none' }}>Back</Link></SecondaryButton>
                    </Grid>
                    <Grid item xs={6}>
                        <PrimaryButton>Next</PrimaryButton>
                    </Grid>
                </Grid>
            </Form>
        </MainContainer>
    );
};
