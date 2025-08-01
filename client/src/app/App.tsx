import { ProductCreate, ProductsTable } from '../entities/product'
import { Container } from '../shared/ui/Container'
import ReduxProvider from './layouts/redux-provider'
import './styles/App.css'

function App() {
    return (
        <ReduxProvider>
            <Container>
                <ProductsTable />
                <ProductCreate className='mt-1' />
            </Container>
        </ReduxProvider>
    )
}

export default App
