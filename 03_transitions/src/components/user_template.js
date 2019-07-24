import React from 'react';
import PropTypes from 'prop-types';

const UserTemplate = (props) => {
    // console.log(props);
    return (
        <div>
            Template
        </div>
    );
};

UserTemplate.propTypes = {
    // name:PropTypes.string,
    // name:PropTypes.oneOf(['Francies', 'Kemal']),
    name:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.oneOf(['Francis','Steve'])
    ]),
    lastname:PropTypes.string,
    age:PropTypes.number,
    // hobbies:PropTypes.array,
    hobbies:PropTypes.arrayOf(PropTypes.string),
    spanish:PropTypes.bool,
    message:PropTypes.func,
    car:PropTypes.object,
    // somethingRequired:PropTypes.string.isRequired
    mother:function(props,propName,componentName){
        if(props[propName] !== 'Jane')
            return new Error(`The name of ${props[propName]} is incorrect. Should be a Jane`);
    }
}

export default UserTemplate;