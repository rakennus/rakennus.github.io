---
title: "FPS Movement for Unity with CharacterController"
layout: post
author: Rakennus
language: en
---

<pre>
<code class="C#">
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(CharacterController))]

public class FPSPlayer : MonoBehaviour
{
    public float crouchVelocity = 2f;
    public float walkingVelocity = 5f;
    public float runningVelocity = 8f;
    public float slideForce = 6.0f;

    public float jumpHeight = 1.5f;
    public float gravity = -40.0f;
    public float mouseSensitivity = 3.0f;

    public LayerMask environmentMask;

    CharacterController characterController;
    public Transform playerCameraContainer;
    public Transform spaceCheck;

    Vector3 velocity = Vector3.zero;
    float slideVelocity = 0;

    Vector3 direction = Vector3.zero;
    Vector3 currentDirection = Vector3.zero;
    Vector3 smoothInputVelocity = Vector3.zero;
    float smoothDirectionSpeed = 0.1f;

    float smoothCrouchValue = 0.0f;
    float currentCrouchValue = 0.0f;
    float crouchValue = 0.5f;

    float xRotation = 0;
    float maxVelocity = 0;
    float friction = 10;

    bool isSliding = false;
    bool isCrouching = false;
    bool jumpingPossible = true;

    void Start()
    {
        characterController = GetComponent<CharacterController>();

        // Lock cursor
        Cursor.lockState = CursorLockMode.Locked;
        Cursor.visible = false;
    }

    void Update()
    {
        // calculate velocity
        valueUpdate();

        float x = Input.GetAxisRaw("Vertical");
        float z = Input.GetAxisRaw("Horizontal");

        if (!isSliding)
        {
            direction = transform.forward * x + transform.right * z;
        }
        direction.Normalize();
        currentDirection = Vector3.SmoothDamp(currentDirection, direction, ref smoothInputVelocity, smoothDirectionSpeed);

        velocity = new Vector3(currentDirection.x * (maxVelocity + slideVelocity), velocity.y, currentDirection.z * (maxVelocity + slideVelocity));

        float movementDirectionY = velocity.y;

        if (Input.GetButtonDown("Jump") && characterController.isGrounded && jumpingPossible)
        {
            velocity.y = Mathf.Sqrt(jumpHeight * -2f * gravity);
            isSliding = false;
            slideVelocity = 0;
        }
        else
        {
            velocity.y = movementDirectionY;
        }

        if (!characterController.isGrounded)
        {
            velocity.y += gravity * Time.deltaTime;
        }

        // Move the controller
        characterController.Move(velocity * Time.deltaTime);

        // Player and Camera rotation
        MouseLook();
    }

    public void MouseLook()
    {
        float mouseX = Input.GetAxis("Mouse X") * mouseSensitivity * 100 * Time.deltaTime;
        float mouseY = Input.GetAxis("Mouse Y") * mouseSensitivity * 100 * Time.deltaTime;

        xRotation -= mouseY;
        xRotation = Mathf.Clamp(xRotation, -90.0f, 90.0f);

        playerCameraContainer.transform.localRotation = Quaternion.Euler(xRotation, 0f, 0f);
        transform.rotation *= Quaternion.Euler(0, mouseX, 0);
    }

    public void valueUpdate()
    {
        // handling sliding, running and crouching
        if (characterController.isGrounded)
        {
            maxVelocity = walkingVelocity;
        }
        upperCharacter();

        if (Input.GetKey(KeyCode.LeftShift) && Input.GetKey(KeyCode.LeftControl) && !isCrouching && !isSliding && characterController.isGrounded)
        {
            slideVelocity = slideForce;
            isSliding = true;
            jumpingPossible = false;
        }
        if (slideVelocity < -0.5f)
        {
            jumpingPossible = true;
        }
        if (slideVelocity > -5.0f && isSliding)
        {
            slideVelocity -= friction * Time.deltaTime;
            lowerCharacter();
        }
        else if (isSliding)
        {
            slideVelocity = 0.0f;
            isSliding = false;

            if (Physics.CheckSphere(spaceCheck.position, 0.6f, environmentMask))
            {
                isCrouching = true;
            }
        }

        if (Input.GetKey(KeyCode.LeftControl) && !isSliding)
        {
            maxVelocity = crouchVelocity;
            isCrouching = true;
            lowerCharacter();
        }
        else if (Physics.CheckSphere(spaceCheck.position, 0.6f, environmentMask) && isCrouching)
        {
            maxVelocity = crouchVelocity;
            isCrouching = true;
            lowerCharacter();
        }
        else
        {
            isCrouching = false;
        }

        if (Input.GetKey(KeyCode.LeftShift) && !isCrouching && characterController.isGrounded)
        {
            maxVelocity = runningVelocity;
        }

        // handling friction / drag
        if (!characterController.isGrounded)
        {
            smoothDirectionSpeed = 0.4f;
        }
        else
        {
            smoothDirectionSpeed = 0.05f;
        }

        currentCrouchValue = Mathf.SmoothDamp(currentCrouchValue, crouchValue, ref smoothCrouchValue, 0.1f);
        playerCameraContainer.transform.localPosition = new Vector3(0, currentCrouchValue, 0);
    }

    public void lowerCharacter()
    {
        characterController.height = 1;
        characterController.center = new Vector3(0, -0.5f, 0);
        crouchValue = -0.2f;
    }
    public void upperCharacter()
    {
        characterController.height = 2;
        characterController.center = new Vector3(0, 0, 0);
        crouchValue = 0.5f;
    }
}
