import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="primary flex justify-center py-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <p className="text-center text-sm text-[#d5f6ff]/60">
        © 2025 Henrik Ruan Santos de Souza. Todos os direitos reservados.
      </p>
    </motion.footer>
  );
}
