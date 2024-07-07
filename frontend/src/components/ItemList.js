import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ItemList = ({ onEdit, onDelete }) => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/item');
            setItems(response.data);
        } catch (error) {
            console.error('AWIT SAYO, MAY ERROR PA!', error);
            setError('AWIT SAYO, MAY ERROR PA!!');
        }
    };
    return (
      <div>
          <h1>Items</h1>
          {error && <p>{error}</p>}
          <ul>
              {items.map(item => (
                  <li key={item.id}>
                      {item.first_name} {item.middle_name} {item.last_name} <br />
                      Residential Address: {item.house_block_lot_no}, {item.street}, {item.subdivision_village}, {item.barangay}, {item.city_municipality}, {item.province}, {item.zipcode} <br />
                      Permanent Address: {item.perm_house_block_lot_no}, {item.perm_street}, {item.perm_subdivision_village}, {item.perm_barangay}, {item.perm_city_municipality}, {item.perm_province} <br />
                      Email: {item.email} <br />
                      Phone: {item.phone} <br />
                      Height: {item.height} <br />
                      Weight: {item.weight} <br />
                      Bloodtype: {item.bloodtype} <br />
                      Date of Birth: {item.date_of_birth} <br />
                      Place of Birth: {item.place_of_birth} <br />
                      Sex: {item.sex} <br />
                      Civil Status: {item.civil_status} <br />
                      GSIS ID No: {item.gsis_id_no} <br />
                      PAG-IBIG ID No: {item.pagibig_id_no} <br />
                      PhilHealth No: {item.philhealth_no} <br />
                      SSS No: {item.sss_no} <br />
                      TIN No: {item.tin_no} <br />
                      Agency Employee No: {item.agency_employee_no} <br />
                      Citizenship: {item.citizenship} <br/>
                      Telephone No: {item.telephone_no} <br />
                      Spouse's Name: {item.spouse_surname}, {item.spouse_first_name} {item.spouse_middle_name}. <br />
                      Occupation: {item.spouse_occupation} <br />
                      Employer/Business Name: {item.spouse_employer_business_name} <br />
                      Address: {item.spouse_business_address} <br />
                      Telephone No: {item.spouse_telephone_no} <br />
                      Children Names: {item.children_names} <br />
                      Children Dates of Birth: {item.children_date_of_birth} <br />
                      Father's Name: {item.father_surname}, {item.father_first_name} {item.father_middle_name}. <br />
                      Mother's Maiden Name: {item.mother_maiden_surname}, {item.mother_maiden_first_name} {item.mother_maiden_middle_name}.<br />
                      <button onClick={() => onEdit(item)}>Edit</button>
                      <button onClick={() => onDelete(item.id)}>Delete</button>
                  </li>
              ))}
          </ul>
      </div>
  );
};

export default ItemList;