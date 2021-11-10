import { getValidators } from '../api/services';

export default {
  async created() {
    try {
      const resp = await getValidators({ params: { limit: 1000 } });

      const nameValidators = resp.data.items.map((elem) => {
        const { identity, name } = { ...elem };

        return { name: name.toLocaleLowerCase(), identity };
      });

      localStorage.setItem('Validators', JSON.stringify(nameValidators));
    } catch (e) {
      console.error(e);
    }
  },
};
