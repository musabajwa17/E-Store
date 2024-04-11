import { Home } from '../components/Home';
import { Sale } from '../components/Sale'
// import { Today_products } from '../components/Today_products';
import { Choose_us } from '../common/Choose_us';
import { Today_products } from '../common/Today_products';
import { Products } from '../common/Products';

export const HomePage = () => {
    return (
        <main >
            <Home />
            <Sale />
            <Products />
            <Choose_us />
            <Today_products />
        </main>
    )
}
