import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { PrimaryButton } from '../components/PrimaryButton';
import { SecondaryButton } from '../components/SecondaryButton';
import { useHistory, Link } from "react-router-dom";
import { Form } from '../components/Form';
import { useForm } from "react-hook-form";
import { MainContainer } from '../components/MainContainer';


const datas = [
    { name: 'Origine de la donnée', desc: 'Tous' },
    { name: 'Contrat', desc: 'SERRADORI' },
    { name: 'Couche', desc: 'Emprises du contrat' },
    { name: 'Critères de recherche', desc: '' },

];


const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: 700,
    },
    title: {
        marginTop: theme.spacing(2),
    },
    backButton: {

        textDecoration: 'none'
    }
}));

export default function Recherche() {
    const classes = useStyles();
    const history = useHistory()
    const { handleSubmit } = useForm({

        mode: "onBlur"

    })
    const onSubmit = () => {
        history.push("./regroupement")

    }
    return (
        <MainContainer>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <List disablePadding>
                    {datas.map((data) => (
                        <ListItem className={classes.listItem} key={data.name}>
                            <ListItemText primary={data.name} secondary={data.desc} />
                        </ListItem>
                    ))}
                </List>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6} >
                        <SecondaryButton ><Link to="/general" style={{ textDecoration: 'none' }}>Back</Link></SecondaryButton>
                    </Grid>
                    <Grid item xs={6}>
                        <PrimaryButton>Next</PrimaryButton>
                    </Grid>
                </Grid>
            </Form>
        </MainContainer>
    );
}