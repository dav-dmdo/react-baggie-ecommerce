import { PropTypes } from 'prop-types';

const Layout = ({children}) => {
    
    return (
        <div className='flex flex-col items-center mt-20'>
            {children}
        </div>
    )
}

Layout.propTypes = {
    children : PropTypes.element
}

export { Layout };