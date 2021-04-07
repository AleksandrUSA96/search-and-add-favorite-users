import React from "react";
import UserItem from "./UserItem";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import {useStyles} from "../common/useStyles";

let UsersGroup = ({groupObject}) => {
    const classes = useStyles();
    return (
        <Accordion TransitionProps={{unmountOnExit: true}}>
            <Typography variant="subtitle1" color="textPrimary">
                <AccordionSummary>
                    Дата регистрации: {groupObject.id.slice(0,4)}.{groupObject.id.slice(5,7)}
                </AccordionSummary>
            </Typography>
            <AccordionDetails className={classes.flexDirection}>
                {
                    groupObject.group.map(user => <UserItem user={user}
                                                                key={user.login.uuid}
                                                                id={user.login.uuid}
                                                                idGroup={groupObject.id}
                    />)
                }
            </AccordionDetails>
        </Accordion>
    )
};


export default UsersGroup;