const Card = ({ item }) => {
  return (
    <div className="card">
      <h3>{item.name + " " + item.last_name}</h3>
      <span>{item.email}</span>
      <span>{item.phone}</span>
      <span>{item.created_at.substring(0, 10)}</span>
      <label for="status">Estado de solicitud: </label>
      <select id="status" name="status">
        <option value="">{item.status}</option>
        <option value="En espera">En espera</option>
        <option value="Anulada">Anulada</option>
        <option value="Atentida">Atentida</option>
      </select>
    </div>
  );
};

export default Card;
