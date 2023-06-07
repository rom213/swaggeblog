const express = require('express');
const Router = express.Router();


////////////////////////////auth//////////////////////// 


/**
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *  schemas:
 *    Auth:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description:  user name
 *        email:
 *          type: string
 *          description:  user email
 *        description:
 *          type: string
 *          description: user descriptison
 *        password:
 *          type: string
 *          description: user password
 *        role:
 *          type: string
 *          description: user role
 *        status:
 *          type: string
 *          description: user status
 *      required:
 *        - name
 *        - email
 *        - password
 *        - description
 *      example:
 *        name: nameUser
 *        email: example@gmail.com
 *        password: 123456
 *        description: programer
 */

/**
* @swagger
* /api/v1/auth/signup:
*  post:
*    summary: register user
*    tags: [Auth]
*    requestBody:
*      required: true
*      content:
*        multipart/form-data:
*          schema:
*            type: object
*            properties:
*              name:
*                type: string
*                description: user name
*              email:
*                type: string
*                description: user email
*              description:
*                type: string
*                description: user description
*              password:
*                type: string
*                description: user password
*              profileImgUrl:
*                type: string
*                format: binary
*                description: Profile img url
*                example: ''
              
*            required:
*              - name
*              - email
*              - description
*              - password
*              - profileImgUrl
*    responses:
*      201:
*        description: new user created
*/

/** 
 * @swagger
 * /api/v1/auth/login:
 *  post:
*    summary: login user
*    tags: [Auth]
*    requestBody:
*      required: true
*      content:
*        application/json:
*          schema:
*            type: object
*            properties:
*              email:
*                type: string
*                description: user email
*              password:
*                type: string
*                description: user password
*            required:
*              - email
*              - password
*    responses:
*      201:
*        description: user logged
*/


/**
 * @swagger
 * /api/v1/auth/renew:
 *    get:
 *      summary: renew token
 *      tags: [Auth]
 *      security:
 *       - bearerAuth: []
 *      responses:
 *        200:
 *          description: token renewed 
 *        401:
 *          description: error de autenticacion
 */



////////////comment////////////////////////////////


/** 
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *  schemas:
 *    Comment:
 *      type: object
 *      properties:
 *        text:
 *          type: string
 *          description: comment text
 *      required:
 *        - text
 *      example:
 *        text: este es el contenido del comentario
*/


/**
 * @swagger
 * /api/v1/comments:
 *  get:
 *    summary: return all comments
 *    tags: [Comment]
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      200:
 *        description: all comments
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Comment'
 */

/**
 * @swagger
 * /api/v1/comments/{postId}:
 *  post:
 *    summary: create comment
 *    tags: [Comment]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: postId
 *        required: true
 *        description: id post
 *        schema:
 *          type: integer
 *          format: int64
 *          minimum: 1
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *           type: object
 *           properties:
 *             text:
 *               type: string
 *               description: comment text
 *           required:
 *             - text
 *          example:
 *            text: este es el contenido del comentario
 *    responses:
 *      201:
 *        description: comment created
 */




  /** 
   * @swagger
   * /api/v1/comments/{id}:
   *  get:
   *    summary: return comment by id
   *    tags: [Comment]
   *    security:
   *      - bearerAuth: []
   *    parameters:
   *      - in: path
   *        name: id
   *        required: true
   *        description: id comment
   *        schema:
   *          type: string
   *    responses:
   *      200:
   *        description: comment by id
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/Comment'   
   *
  */
  /** 
   * @swagger
   * /api/v1/comments/{id}:
   *  patch:
   *    summary: update my comment
   *    tags: [Comment]
   *    security:
   *      - bearerAuth: []
   *    parameters:
   *      - in: path
   *        name: id
   *        required: true
   *        description: id comment
   *        schema:
   *          type: string
   *    requestBody:
   *      required: true
   *      content:
   *        application/json: 
   *          schema:
   *            type: object
   *            properties:
   *              text:
   *                type: string
   *                description: comment text
   *    responses:
   *      200:
   *        description: comment by id
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/Comment'   
   *
  */

/**
   * @swagger
   * /api/v1/comments/{id}:
   *  delete:
   *    summary: delete my comment
   *    tags: [Comment]
   *    security:
   *       - bearerAuth: []
   *    parameters:
   *      - in: path
   *        name: id
   *        schema:
   *          type: string
   *        required: true
   *        description: the comment id
   *    responses:
   *      200:
   *        description: comment deleted!
   *      404:
   *        description: error comment not found
   *
   */ 




/**
* @swagger
* components:
*   securitySchemes:
*     bearerAuth:
*       type: http
*       scheme: bearer
*       bearerFormat: JWT
*   schemas:
*     Post:
*       type: object
*       properties:
*         title:
*           type: string
*           description: post title
*         content:
*           type: string
*           description: content post
*       required:
*         - title
*         - content
*       example:
*         title: la tecnologia avanza
*         content: la tecnologia esta avanzando constantemente y este es el contenido del post
*/




/**
 * @swagger
 * /api/v1/posts:
 *   get:
 *      summary: return all posts
 *      tags: [Post]
 *      responses:
 *        200:
 *          description: all posts
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Post'   
 * 
*/

/**
   * @swagger
   * /api/v1/posts:
   *  post:
   *    summary: create a new post
   *    tags: [Post]
   *    security:
   *      - bearerAuth: []
   *    requestBody:
   *      required: true
   *      content:
   *        multipart/form-data:
   *          schema:
   *            type: object
   *            properties:
   *              title:
   *                type: string
   *              content:
   *                type: string
   *              postImgs:
   *                type: array
   *                items:
   *                  type: string
   *                  format: binary
   *            required:
   *              - title
   *              - content
   *    responses:
   *      201:
   *        description: new user created!
   */

/** 
 * @swagger
 * /api/v1/posts/me:
 *  get:
 *    summary: return all my posts
 *    tags: [Post]
 *    security:
 *      - bearerAuth: []
 *    responses:
 *       200:
 *         description: all my posts
 *         content:
 *           application/json:
 *             schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Post' 
*/


/** 
 * @swagger
 * /api/v1/posts/{id}:
 *  get:
 *    summary: return one my posts
 *    tags: [Post]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the post id
 *    responses:
 *       200:
 *         description: one my posts
 *         content:
 *           application/json:
 *             schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Post' 
*/


/** 
 * @swagger
 * /api/v1/posts/{id}:
 *  get:
 *    summary: return one post
 *    tags: [Post]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the post id
 *    responses:
 *       200:
 *         description: one post
 *         content:
 *           application/json:
 *             schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Post' 
*/

   /** 
   * @swagger
   * /api/v1/posts/{id}:
   *  patch:
   *    summary: update a post
   *    tags: [Post]
   *    security:
   *       - bearerAuth: []
   *    parameters:
   *      - in: path
   *        name: id
   *        schema:
   *          type: string
   *        required: true
   *        description: the post id
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            $ref: '#/components/schemas/Post'
   *    responses:
   *      200:
   *        description: user updated!
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              $ref: '#/components/schemas/Post'
   *      404:
   *        description: post not found
   *
   */

  /**
   * @swagger
   * /api/v1/posts/{id}:
   *  delete:
   *    summary: delete my post
   *    tags: [Post]
   *    security:
   *       - bearerAuth: []
   *    parameters:
   *      - in: path
   *        name: id
   *        schema:
   *          type: string
   *        required: true
   *        description: the post id
   *    responses:
   *      200:
   *        description: post deleted!
   *      404:
   *        description: error post not found
   *
   */ 

  //////////////////usser////////////////////


/**
* @swagger
* components:
*   securitySchemes:
*     bearerAuth:
*       type: http
*       scheme: bearer
*       bearerFormat: JWT
*   schemas:
*     User:
*       type: object
*       properties:
*         name:
*           type: string
*           description: user name
*         email:
*           type: string
*           description: your email
*         description: 
*           type: string   
*         password:
*            type: string
*            description: your password
*         required:
*           - name
*           - email
*           - description
*           - password
*         example:
*           name: benito
*           email: benito@correo.com
*           password: 123456789
*           description: i like dogs
*/




/**
 * @swagger
 * /api/v1/users:
 *   get:
 *      summary: return all users
 *      tags: [User]
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          description: all users
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/User'   
 * 
*/




  /** 
 * @swagger
 * /api/v1/users/{id}:
 *  get:
 *    summary: return one user
 *    tags: [User]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the user id
 *    responses:
 *       200:
 *         description: one user
 *         content:
 *           application/json:
 *             schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User' 
*/
   /** 
   * @swagger
   * /api/v1/users/{id}:
   *  patch:
   *    summary: update my user
   *    tags: [User]
   *    security:
   *       - bearerAuth: []
   *    parameters:
   *      - in: path
   *        name: id
   *        schema:
   *          type: string
   *        required: true
   *        description: the user id
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            properties:
   *              name:
   *                type: string
   *              email:
   *                type: string
   *    responses:
   *      200:
   *        description: user updated!
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                name:
   *                  type: string
   *                email:
   *                  type: string
   *      404:
   *        description: user not found
   *
   */

  /**
   * @swagger
   * /api/v1/users/{id}:
   *  delete:
   *    summary: delete my user 
   *    tags: [User]
   *    security:
   *       - bearerAuth: []
   *    parameters:
   *      - in: path
   *        name: id
   *        schema:
   *          type: string
   *        required: true
   *        description: my id user
   *    responses:
   *      200:
   *        description: post deleted!
   *      403:
   *        description: You do not have permission to perform this action!
   *      404:
   *        description: user not found
   */ 
  

      /** 
   * @swagger
   * /api/v1/users/password/{id}:
   *  patch:
   *    summary: update password
   *    tags: [User]
   *    security:
   *       - bearerAuth: []
  *    parameters:
   *      - in: path
   *        name: id
   *        schema:
   *          type: string
   *        required: true
   *        description: my id user
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            properties:
   *              currentPassword:
   *                type: string
   *              newPassword:
   *                type: string
   *            require: 
   *              - currentPassword
   *              - newPassword
   *    responses:
   *      200:
   *        description: user updated!
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                password:
   *                  type: string
   *      404:
   *        description: post not found
   *
   */




module.exports = Router;
