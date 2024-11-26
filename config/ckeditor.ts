module.exports = () => ({
    presets: {
      default: {
        field: {
          key: 'default',
          value: 'default',
          metadatas: {
            intlLabel: {
              id: 'ckeditor.preset.default.label',
              defaultMessage: 'Default',
            },
          },
        },
        editorConfig: {
          toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|', 'undo', 'redo'],
          heading: {
            options: [
              { model: 'paragraph', title: 'Параграф', class: 'ck-heading_paragraph' },
              { model: 'heading1', view: 'h1', title: 'Заголовок 1', class: 'ck-heading_heading1' },
              { model: 'heading2', view: 'h2', title: 'Заголовок 2', class: 'ck-heading_heading2' },
            ],
          },
        },
      },
    },
  });
  