import Card from './Card';
import './App.css';

function CardHolder() {
  return (
      // look into responsive sm and md screen
    <div class="grid sm:grid-cols-4 gap-4">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  );
}

export default CardHolder;
