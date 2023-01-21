import { Fraunces } from '@next/font/google';

import cart from '../../../../public/icon-cart.svg';

import styles from './ProductCard.module.scss';

const fraunces = Fraunces({ subsets: ['latin'] });

export default function ProductCard({
  category,
  title,
  description,
  price,
  oldPrice,
  image,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.image} style={{ backgroundImage: image }} />
        <div className={styles.content}>
          <div className={styles.category}>{category}</div>
          <div className={styles.title}>
            <p className={fraunces.className} style={{ margin: 0 }}>
              {title}
            </p>
          </div>
          <div className={styles.description}>{description}</div>
          <div className={styles.price}>
            <div className={styles.newPrice}>
              <p className={fraunces.className} style={{ margin: 0 }}>
                {price}
              </p>
            </div>
            <div className={styles.oldPrice}>{oldPrice}</div>
          </div>
          <button className={styles.button}>
            <div className={styles.content}>
              <img alt="Shopping cart icon" src={cart.src} />
              <div>Add to Cart</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
