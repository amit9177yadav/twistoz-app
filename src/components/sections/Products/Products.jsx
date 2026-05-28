import { motion } from 'framer-motion';
import SectionHeader from '../../ui/SectionHeader/SectionHeader';
import ProductCard from '../../ui/ProductCard/ProductCard';
import Button from '../../ui/Button/Button';
import { products } from '../../../data/siteData';
import { staggerContainer } from '../../../utils/animations';
import styles from './Products.module.scss';

export default function Products() {
  return (
    <section id="products" className={styles.products}>
      <div className={styles.container}>
        <SectionHeader
          title="Our Core Products"
          subtitle="Crafted to perfection for every meal"
        />

        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </motion.div>

        <motion.div
          className={styles.footer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Button href="#products" variant="navy" icon="arrow">
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
