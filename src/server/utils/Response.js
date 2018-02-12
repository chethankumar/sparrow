module.exports.unauthorized = (req, res, data) => {
  res.status(401);

  if (data !== undefined) {
    return res.json({ error_description: data });
  }
  return res.send();
};

module.exports.badRequest = (req, res, data) => {
  res.status(400);

  if (data !== undefined) {
    return res.json({ error_description: data });
  }
  return res.send();
};

module.exports.conflict = (req, res, data) => {
  res.status(409);

  if (data !== undefined) {
    return res.json({ error_description: data });
  }

  return res.send();
};

module.exports.created = (req, res, data) => {
  res.status(201);

  if (data !== undefined) {
    return res.json(data);
  }
  return res.send();
};

module.exports.accepted = (req, res, data) => {
  res.status(202);

  if (data !== undefined) {
    return res.json(data);
  }
  return res.send();
};

module.exports.deleted = (req, res) => {
  res.status(204);
  return res.send();
};

module.exports.forbidden = (req, res, data) => {
  res.status(403);

  if (data !== undefined) {
    return res.json({ error_description: data });
  }
  return res.send();
};

module.exports.notFound = (req, res, data) => {
  res.status(404);

  if (data !== undefined) {
    return res.json({ error_description: data });
  }
  return res.send();
};

module.exports.ok = (req, res, data) => {
  res.status(200);

  if (data !== undefined) {
    return res.json(data);
  }
  return res.json([]);
};

module.exports.serverError = (req, res, data) => {
  res.status(500);

  if (data !== undefined) {
    return res.json({ error_description: data });
  }
  return res.send();
};

