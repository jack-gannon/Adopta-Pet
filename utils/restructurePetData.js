module.exports = restructurePetData = obj => {
  const newObject = {
    name: obj.name,
    id: obj.id,
    org_id: obj.organization_id,
    url: obj.url,
    type: obj.type,
    species: obj.species,
    breeds: obj.breeds,
    gender: obj.gender,
    size: obj.size,
    sections: [
      {
        title: "Details",
        items: [
          {
            location: `${obj.contact.address.city}, ${obj.contact.address.state}`
          },
          { distance: obj.distance },
          { status: obj.status }
        ]
      },
      {
        title: "Medical",
        items: [
          { spayed_neutered: obj.attributes.spayed_neutered },
          { special_needs: obj.attributes.special_needs },
          { shots_current: obj.attributes.shots_current },
          { declawed: obj.attributes.declawed }
        ]
      },
      {
        title: "Attributes",
        items: [
          { coat: obj.coat },
          {
            colors: [
              obj.colors.primary,
              obj.colors.secondary,
              obj.colors.tertiary
            ]
          },
          { size: obj.size }
        ]
      },
      {
        title: "Behavior",
        items: [
          { house_trained: obj.attributes.house_trained },
          { good_with_kids: obj.environment.children },
          { good_with_dogs: obj.environment.dogs },
          { good_with_cats: obj.environment.cats }
        ]
      }
    ],
    photos: obj.photos
  };

  newObject.sections = newObject.sections.filter(
    section => section.items.length > 0
  );
  return newObject;
};
