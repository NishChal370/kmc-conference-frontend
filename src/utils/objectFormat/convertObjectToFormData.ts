function convertObjectToFormData(obj: Record<string, any>): FormData {
      const formData = new FormData();

      Object.entries(obj).forEach(([key, value]) => {

            if (value === undefined) return;

            if (value instanceof File) {
                  // Handle File
                  formData.append(key, value, value.name);
            } else if (value instanceof FileList) {
                  // Handle FileList
                  Array.from(value).forEach(file => {
                        formData.append(key, file, file.name);
                  });
            } else if (Array.isArray(value)) {
                  // Handle arrays by appending each element individually
                  value.forEach(item => {
                        formData.append(`${key}[]`, item);
                  });
            } else if (typeof value === 'object' && value !== null) {
                  // Handle objects (excluding null) by converting to JSON
                  formData.append(key, JSON.stringify(value));
            } else {
                  // Append other values directly
                  formData.append(key, value === null || value === undefined ? '' : value);
            }
      });

      return formData;
}

export default convertObjectToFormData;
