
function convertObjectToFormData(obj: object) {
      const formData = new FormData();

      Object.entries(obj).forEach(([key, value]) => {

            if (value instanceof FileList) {
                  if (value.length) {

                        formData.append(key, value[0], value[0].name);
                  }

            }
            else {

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