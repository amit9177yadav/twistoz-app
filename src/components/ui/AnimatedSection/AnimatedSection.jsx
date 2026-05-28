import { motion } from 'framer-motion';
import { fadeUp } from '../../utils/animations';

export default function AnimatedSection({
  children,
  className = '',
  id,
  delay = 0,
  as: Tag = 'section',
}) {
  const Component = motion[Tag] || motion.section;

  return (
    <Component
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: fadeUp.hidden,
        visible: {
          ...fadeUp.visible,
          transition: { ...fadeUp.visible.transition, delay },
        },
      }}
    >
      {children}
    </Component>
  );
}
