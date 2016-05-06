export default function ($resource, baseParams) {
  'ngInject'

  let model = $resource(
    baseParams.apiUrl + 'tags/:id/:action/:actionTwo/:actionThree/:actionFour/',
    {id: '@id', action: '@action', actionTwo: '@actionTwo'},
    {
      create: {
        method: 'PUT'
      },
      update: {
        method: 'PUT'
      }
    }
  );

  return model;
}