import { db, firebaseInit } from "./../config/index";

export function getAllJobOffers(
  where = null,
  nextWhere = null,
  orderBy = ["createdAt", "desc"],
  limit = 12
) {
  if (nextWhere && where) {
    return db
      .collection("jobOffers")
      .orderBy(orderBy[0], orderBy[1])
      .where(where[0], where[1], where[2])
      .where(nextWhere[0], nextWhere[1], nextWhere[2])
      .get();
  }

  if (nextWhere) {
    return db
      .collection("jobOffers")
      .orderBy(orderBy[0], orderBy[1])
      .where(nextWhere[0], nextWhere[1], nextWhere[2])
      .get();
  }

  if (where) {
    return db
      .collection("jobOffers")
      .orderBy(orderBy[0], orderBy[1])
      .where(where[0], where[1], where[2])
      .get();
  }

  return db.collection("jobOffers").orderBy(orderBy[0], orderBy[1]).get();
}

export function getSingleJobOffer(id) {
  return db.collection("jobOffers").doc(id);
}

export function addJobOffer(jobOffer) {
  const user = firebaseInit.auth().currentUser;
  return db.collection("jobOffers").add({
    ...jobOffer,
    createdBy: user.uid,
  });
}

export function updateJobOffer(jobOffer, id) {
  return db.collection("jobOffers").doc(id).update(jobOffer);
}

export function deleteJobOffer(jobOfferId) {
  return db.collection("jobOffers").doc(jobOfferId).delete();
}
