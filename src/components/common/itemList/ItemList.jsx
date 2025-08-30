import Item from '../../item/Item';

import styles from './itemList.module.css';

const ItemList = ({ products }) => {
    return (
        <div className={styles.itemList}>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    );
};

export default ItemList;