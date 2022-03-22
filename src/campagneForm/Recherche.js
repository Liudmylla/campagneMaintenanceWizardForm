import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


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
}));

export default function Recherche() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <List disablePadding>
                {datas.map((data) => (
                    <ListItem className={classes.listItem} key={data.name}>
                        <ListItemText primary={data.name} secondary={data.desc} />
                    </ListItem>
                ))}
            </List>
        </React.Fragment>
    );
}