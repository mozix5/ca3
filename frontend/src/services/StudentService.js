import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/students/';
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

export async function getStudents() {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
}

export async function deleteStudent(studentId) {
  try {
    const response = await axios.delete(`${baseURL}${studentId}/`, { headers });
    return response.data;
  } catch (error) {
    console.error(`Error deleting student with ID ${studentId}:`, error);
    throw error;
  }
}

export async function addStudent(student) {
  const { FirstName, LastName, RegistrationNo, Email, Course } = student;
  try {
    const response = await axios.post(baseURL, {
      studentId: null,
      FirstName: FirstName.value,
      LastName: LastName.value,
      RegistrationNo: RegistrationNo.value,
      Email: Email.value,
      Course: Course.value
    }, { headers });
    return response.data;
  } catch (error) {
    console.error('Error adding student:', error);
    throw error;
  }
}

export async function updateStudent(studentId, student) {
  const { FirstName, LastName, RegistrationNo, Email, Course } = student;
  try {
    const response = await axios.put(`${baseURL}${studentId}/`, {
      FirstName: FirstName.value,
      LastName: LastName.value,
      RegistrationNo: RegistrationNo.value,
      Email: Email.value,
      Course: Course.value
    }, { headers });
    return response.data;
  } catch (error) {
    console.error(`Error updating student with ID ${studentId}:`, error);
    throw error;
  }
}
