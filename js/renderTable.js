export default function renderTable(data) {
  const markup = data
    .map((item) => {
      return `<tr>
          <td>${item.name}</td>
          <td>${item.company}</td>
          <td>${item.phone_number}</td>
          <td>${item.email}</td>
          <td>${item.country}</td>
          <td>
            <div class=${item.status}>${item.status}</div>
          </td>
        </tr>`;
    })
    .join('');

  return markup;
}
