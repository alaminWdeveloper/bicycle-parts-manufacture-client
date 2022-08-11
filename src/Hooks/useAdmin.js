import { useEffect, useState } from "react";

const useAdmin = user => {
    const [ admin, setAdmin ] = useState( false );
    const [ adminLoading, setAdminLoading ] = useState( true );

    useEffect( () => {
        fetch( `https://peaceful-shore-44176.herokuapp.com/admin/${ user.email }`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${ localStorage.getItem( 'accessToken' ) }`
            }
        } )
            .then( res => res.json() )
            .then( data => {
                setAdmin( data.admin );
                setAdminLoading( false );
            } );
    }, [ user ] );
    return [ admin, adminLoading ];
};
export default useAdmin;