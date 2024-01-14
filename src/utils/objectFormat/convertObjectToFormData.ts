
function convertObjectToFormData(obj: object) {
      const formData = new FormData();

      Object.entries(obj).forEach(([key, value]) => {

            console.log(value, typeof value)
            if (value instanceof File) {
                  if (value) {

                        formData.append(key, value, value.name);
                  }

            }
            else {

                  if (value)
                        formData.append(
                              key,
                              // if value type is object convert it into JSON
                              typeof value === 'object' ? JSON.stringify(value) : value
                        );
            }
      });

      return formData;
}

export default convertObjectToFormData