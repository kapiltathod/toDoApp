const router = require('express').Router();
const checkAuth = require('../middlewares/checkAuth');
const Comments = require('../controllers/comments');
const validatorMiddleware = require('../middlewares/validator');
const commentSchema = require('../schemas/commentSchema');

router.post('/todoItems/:todoItemId/comments', checkAuth, validatorMiddleware(commentSchema), Comments.create);
router.get('/todoItems/:todoItemId/comments', checkAuth, Comments.list);

module.exports = router;