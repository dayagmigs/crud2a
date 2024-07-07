import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ItemForm = ({ item, onSuccess }) => {
const [firstName, setFirstName] = useState('');
const [middleName, setMiddleName] = useState('');
const [lastName, setLastName] = useState('');
const [houseBlockLotNo, setHouseBlockLotNo] = useState('');
const [street, setStreet] = useState('');
const [subdivisionVillage, setSubdivisionVillage] = useState('');
const [barangay, setBarangay] = useState('');
const [cityMunicipality, setCityMunicipality] = useState('');
const [province, setProvince] = useState('');
const [zipcode, setZipcode] = useState('');
const [residentialAddress, setResidentialAddress] = useState('');
const [permHouseBlockLotNo, setPermHouseBlockLotNo] = useState('');
const [permStreet, setPermStreet] = useState('');
const [permSubdivisionVillage, setPermSubdivisionVillage] = useState('');
const [permBarangay, setPermBarangay] = useState('');
const [permCityMunicipality, setPermCityMunicipality] = useState('');
const [permProvince, setPermProvince] = useState('');
const [permAddress, setPermAddress] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [height, setHeight] = useState('');
const [weight, setWeight] = useState('');
const [bloodtype, setBloodtype] = useState('');
const [dateOfBirth, setDateOfBirth] = useState('');
const [placeOfBirth, setPlaceOfBirth] = useState('');
const [sex, setSex] = useState('');
const [civilStatus, setCivilStatus] = useState('');
const [gsisIdNo, setGsisIdNo] = useState('');
const [pagibigIdNo, setPagibigIdNo] = useState('');
const [philhealthNo, setPhilhealthNo] = useState('');
const [sssNo, setSssNo] = useState('');
const [tinNo, setTinNo] = useState('');
const [agencyEmployeeNo, setAgencyEmployeeNo] = useState('');
const [citizenship, setCitizenship] = useState('');
const [telephoneNo, setTelephoneNo] = useState('');
const [spouseSurname, setSpouseSurname] = useState('');
const [spouseFirstName, setSpouseFirstName] = useState('');
const [spouseMiddleName, setSpouseMiddleName] = useState('');
const [spouseOccupation, setSpouseOccupation] = useState('');
const [spouseEmployerBusinessName, setSpouseEmployerBusinessName] = useState('');
const [spouseBusinessAddress, setSpouseBusinessAddress] = useState('');
const [spouseTelephoneNo, setSpouseTelephoneNo] = useState('');
const [childrenNames, setChildrenNames] = useState('');
const [childrenDateOfBirth, setChildrenDateOfBirth] = useState('');
const [fatherSurname, setFatherSurname] = useState('');
const [fatherFirstName, setFatherFirstName] = useState('');
const [fatherMiddleName, setFatherMiddleName] = useState('');
const [motherMaidenSurname, setMotherMaidenSurname] = useState('');
const [motherMaidenFirstName, setMotherMaidenFirstName] = useState('');
const [motherMaidenMiddleName, setMotherMaidenMiddleName] = useState('');

useEffect(() => {
if (item) {
setFirstName(item.first_name);
setMiddleName(item.middle_name);
setLastName(item.last_name);
setHouseBlockLotNo(item.house_block_lot_no);
setStreet(item.street);
setSubdivisionVillage(item.subdivision_village);
setBarangay(item.barangay);
setCityMunicipality(item.city_municipality);
setProvince(item.province);
setZipcode(item.zipcode);
setResidentialAddress(item.residential_address);
setPermHouseBlockLotNo(item.perm_house_block_lot_no);
setPermStreet(item.perm_street);
setPermSubdivisionVillage(item.perm_subdivision_village);
setPermBarangay(item.perm_barangay);
setPermCityMunicipality(item.perm_city_municipality);
setPermProvince(item.perm_province);
setPermAddress(item.perm_address);
setEmail(item.email);
setPhone(item.phone);
setHeight(item.height);
setWeight(item.weight);
setBloodtype(item.bloodtype);
setDateOfBirth(item.date_of_birth);
setPlaceOfBirth(item.place_of_birth);
setSex(item.sex);
setCivilStatus(item.civil_status);
setGsisIdNo(item.gsis_id_no);
setPagibigIdNo(item.pagibig_id_no);
setPhilhealthNo(item.philhealth_no);
setSssNo(item.sss_no);
setTinNo(item.tin_no);
setAgencyEmployeeNo(item.agency_employee_no);
setCitizenship(item.citizenship);
setTelephoneNo(item.telephone_no);
setSpouseSurname(item.spouse_surname);
setSpouseFirstName(item.spouse_first_name);
setSpouseMiddleName(item.spouse_middle_name);
setSpouseOccupation(item.spouse_occupation);
setSpouseEmployerBusinessName(item.spouse_employer_business_name);
setSpouseBusinessAddress(item.spouse_business_address);
setSpouseTelephoneNo(item.spouse_telephone_no);
setChildrenNames(item.children_names);
setChildrenDateOfBirth(item.children_date_of_birth);
setFatherSurname(item.father_surname);
setFatherFirstName(item.father_first_name);
setFatherMiddleName(item.father_middle_name);
setMotherMaidenSurname(item.mother_maiden_surname);
setMotherMaidenFirstName(item.mother_maiden_first_name);
setMotherMaidenMiddleName(item.mother_maiden_middle_name);
}
}, [item]);

const handleSubmit = async (event) => {
event.preventDefault();
const data = {
first_name: firstName,
middle_name: middleName,
last_name: lastName,
house_block_lot_no: houseBlockLotNo,
street,
subdivision_village: subdivisionVillage,
barangay,
city_municipality: cityMunicipality,
province,
zipcode,
residential_address: residentialAddress,
perm_house_block_lot_no: permHouseBlockLotNo,
perm_street: permStreet,
perm_subdivision_village: permSubdivisionVillage,
perm_barangay: permBarangay,
perm_city_municipality: permCityMunicipality,
perm_province: permProvince,
perm_address: permAddress,
email,
phone,
height,
weight,
bloodtype,
date_of_birth: dateOfBirth,
place_of_birth: placeOfBirth,
sex,
civil_status: civilStatus,
gsis_id_no: gsisIdNo,
pagibig_id_no: pagibigIdNo,
philhealth_no: philhealthNo,
sss_no: sssNo,
tin_no: tinNo,
agency_employee_no: agencyEmployeeNo,
citizenship: citizenship,
telephone_no: telephoneNo,
spouse_surname: spouseSurname,
spouse_first_name: spouseFirstName,
spouse_middle_name: spouseMiddleName,
spouse_occupation: spouseOccupation,
spouse_employer_business_name: spouseEmployerBusinessName,
spouse_business_address: spouseBusinessAddress,
spouse_telephone_no: spouseTelephoneNo,
children_names: childrenNames,
children_date_of_birth: childrenDateOfBirth,
father_surname: fatherSurname,
father_first_name: fatherFirstName,
father_middle_name: fatherMiddleName,
mother_maiden_surname: motherMaidenSurname,
mother_maiden_first_name: motherMaidenFirstName,
mother_maiden_middle_name: motherMaidenMiddleName
};
try {
if (item) {
await axios.put(`http://localhost:8000/api/item/${item.id}/`, data);
} else {
await axios.post('http://localhost:8000/api/item/', data);
}
onSuccess();
} catch (error) {
console.error('AWIT SAYO, MAY ERROR PA', error);
}
};

return (
<form onSubmit={handleSubmit} style={{
            background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            color: 'white'
        }}>
            <h2 style={{ textAlign: 'center' }}>PERSONAL INFORMATION</h2>
            <div>
                <label>First Name:</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>Middle Name:</label>
                <input type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>House Block Lot No:</label>
                <input type="text" value={houseBlockLotNo} onChange={(e) => setHouseBlockLotNo(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>Street:</label>
                <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>Subdivision/Village:</label>
                <input type="text" value={subdivisionVillage} onChange={(e) => setSubdivisionVillage(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>Barangay:</label>
                <input type="text" value={barangay} onChange={(e) => setBarangay(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>City/Municipality:</label>
                <input type="text" value={cityMunicipality} onChange={(e) => setCityMunicipality(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>Province:</label>
                <input type="text" value={province} onChange={(e) => setProvince(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>Zipcode:</label>
                <input type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>Residential Address:</label>
                <input type="text" value={residentialAddress} onChange={(e) => setResidentialAddress(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>Perm. House Block Lot No:</label>
                <input type="text" value={permHouseBlockLotNo} onChange={(e) => setPermHouseBlockLotNo(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>Perm. Street:</label>
                <input type="text" value={permStreet} onChange={(e) => setPermStreet(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>Perm. Subdivision Village:</label>
                <input type="text" value={permSubdivisionVillage} onChange={(e) => setPermSubdivisionVillage(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>Perm. Barangay:</label>
                <input type="text" value={permBarangay} onChange={(e) => setPermBarangay(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>Perm. City/Municipality:</label>
                <input type="text" value={permCityMunicipality} onChange={(e) => setPermCityMunicipality(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>Perm. Province:</label>
                <input type="text" value={permProvince} onChange={(e) => setPermProvince(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>Perm. Address:</label>
                <input type="text" value={permAddress} onChange={(e) => setPermAddress(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>Phone:</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>Height:</label>
                <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>Weight:</label>
                <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>Blood Type:</label>
                <input type="text" value={bloodtype} onChange={(e) => setBloodtype(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>Date of Birth:</label>
                <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>Place of Birth:</label>
                <input type="text" value={placeOfBirth} onChange={(e) => setPlaceOfBirth(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>Sex:</label>
                <input type="text" value={sex} onChange={(e) => setSex(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>Civil Status:</label>
                <input type="text" value={civilStatus} onChange={(e) => setCivilStatus(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>GSIS ID No:</label>
                <input type="text" value={gsisIdNo} onChange={(e) => setGsisIdNo(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>Pagibig ID No:</label>
                <input type="text" value={pagibigIdNo} onChange={(e) => setPagibigIdNo(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>Philhealth No:</label>
                <input type="text" value={philhealthNo} onChange={(e) => setPhilhealthNo(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>SSS No:</label>
                <input type="text" value={sssNo} onChange={(e) => setSssNo(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>TIN No:</label>
                <input type="text" value={tinNo} onChange={(e) => setTinNo(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>Agency Employee No:</label>
                <input type="text" value={agencyEmployeeNo} onChange={(e) => setAgencyEmployeeNo(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>Citizenship:</label>
                <input type="text" value={citizenship} onChange={(e) => setCitizenship(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <div>
                <label>Telephone No:</label>
                <input type="text" value={telephoneNo} onChange={(e) => setTelephoneNo(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
                }} />
            </div>
            <h2 style={{ textAlign: 'center' }}>FAMILY BACKGROUND</h2>
            <div>
            <label>Spouse's Surname:</label>
            <input type="text" value={spouseSurname} onChange={(e) => setSpouseSurname(e.target.value)} style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '10px'
            }} />
            </div>
            <div>
            <label>First Name:</label>
            <input type="text" value={spouseFirstName} onChange={(e) => setSpouseFirstName(e.target.value)} style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            marginBottom: '10px'
            }} />
            </div>
            <div>
            <label>Middle Name:</label>
            <input type="text" value={spouseMiddleName} onChange={(e) => setSpouseMiddleName(e.target.value)} style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            marginBottom: '10px'
            }} />
            </div>
            <div>
            <label>Occupation:</label>
            <input type="text" value={spouseOccupation} onChange={(e) => setSpouseOccupation(e.target.value)} style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            marginBottom: '10px'
            }} />
            </div>
            <div>
            <label>Employer/Business Name:</label>
            <input type="text" value={spouseEmployerBusinessName} onChange={(e) => setSpouseEmployerBusinessName(e.target.value)} style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            marginBottom: '10px'
            }}/>
            </div>
            <div>
            <label>Business Address:</label>
            <textarea value={spouseBusinessAddress} onChange={(e) => setSpouseBusinessAddress(e.target.value)} style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            marginBottom: '10px'
            }}/>
            </div>
            <div>
            <label>Telephone No:</label>
            <input type="text" value={spouseTelephoneNo} onChange={(e) => setSpouseTelephoneNo(e.target.value)}  style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            marginBottom: '10px'
            }}/>
            </div>
            <div>
            <label>Children Names:</label>
            <textarea value={childrenNames} onChange={(e) => setChildrenNames(e.target.value)} style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            marginBottom: '10px'
            }} />
            </div>
            <div>
            <label>Children Date of Birth:</label>
            <textarea value={childrenDateOfBirth} onChange={(e) => setChildrenDateOfBirth(e.target.value)} style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            marginBottom: '10px'
            }}/>
            </div>
            <div>
            <label>Father's Surname:</label>
            <input type="text" value={fatherSurname} onChange={(e) => setFatherSurname(e.target.value)}  style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            marginBottom: '10px'
            }}/>
            </div>
            <div>
            <label>First Name:</label>
            <input type="text" value={fatherFirstName} onChange={(e) => setFatherFirstName(e.target.value)} style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            marginBottom: '10px'
            }}/>
            </div>
            <div>
            <label>Middle Name:</label>
            <input type="text" value={fatherMiddleName} onChange={(e) => setFatherMiddleName(e.target.value)} style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            marginBottom: '10px'
            }} />
            </div>
            <div>
            <label>Maiden Surname:</label>
            <input type="text" value={motherMaidenSurname} onChange={(e) => setMotherMaidenSurname(e.target.value)}  style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            marginBottom: '10px'
            }}/>
            </div>
            <div>
            <label>First Name:</label>
            <input type="text" value={motherMaidenFirstName} onChange={(e) => setMotherMaidenFirstName(e.target.value)}  style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            marginBottom: '10px'
            }}/>
            </div>
            <div>
            <label>Middle Name:</label>
            <input type="text" value={motherMaidenMiddleName} onChange={(e) => setMotherMaidenMiddleName(e.target.value)} style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            marginBottom: '10px'
            }}/>
            </div>

            <div style={{ textAlign: 'center' }}>
                <button type="submit" style={{
                    padding: '10px 20px',
                    borderRadius: '5px',
                    border: 'none',
                    background: '#ff7e5f',
                    color: 'white',
                    cursor: 'pointer'
                }}>Submit</button>
            </div>
        </form>
    );
};

export default ItemForm;