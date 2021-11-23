import { db } from "./../config/index";

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
  return db.collection("jobOffers").add(jobOffer);
}

export function updateJobOffer(jobOffer) {
  return db.collection("jobOffers").doc(jobOffer.id).update(jobOffer);
}

export function deleteJobOffer(jobOfferId) {
  return db.collection("jobOffers").doc(jobOfferId).delete();
}
