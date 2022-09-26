export enum FieldTypes {
    number = 'number',
    dropdown = 'dropdown',
    boolean = 'boolean',
    shortAnswer = 'ShortAnswer',
    starRating = 'StarRating',
    textfield = 'textfield',
    formId = 'formId'
}
type FormBuilderValues = {
    id: string;
    formName: string;
    fieldName: string;
    fieldType: FieldTypes;
    fieldHint?: string;
    value?: string;
    placeholderText?: string;
    showBuilder: boolean;
}

export const formTemplate = (formItems: FormBuilderValues[]) => `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title>{formItems[0].formName}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../created.css"/>
</head>

<body>

<div class="container">
<!-- We will put our React App inside this div. -->
<div id="form_container" props='{"form": [${formItems.map((item: FormBuilderValues) => JSON.stringify(item))}]}'></div>
<!-- Load React. -->
<!-- Note: when deploying, replace "development.js" with "production.min.js". -->
<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
<!-- Load our React component lib prod. -->
<!--<script src="https://unpkg.com/created-forms-components@1.0.1/public/bundle.js"></script>-->
<script src="../bundle.js"></script>
</div>

</body>
</html>`
