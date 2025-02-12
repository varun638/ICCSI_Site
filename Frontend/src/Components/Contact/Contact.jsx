import { useLocation } from 'react-router';
import Contacts from '../../shared/components/contacts/Contacts';

export default function Contact() {
  const location = useLocation(); // Get the current path


   // Condition to apply padding only on the "About" page
   const shouldAddPadding = location.pathname === '/contact';
  return (
    <div>
      <Contacts props = {shouldAddPadding} />
    </div>
  );
}
