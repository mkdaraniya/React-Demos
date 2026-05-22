import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Input, Select, RTE } from "../index";
import { useForm } from "react-hook-form";
import appwrite from "../../appwrite/config";

function PostForm({ post }) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      title: "",
      slug: "",
      content: "",
      status: "active",
    },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (post) {
      reset({
        title: post.title || "",
        slug: post.slug || "",
        content: post.content || "",
        status: post.status || "active",
      });
    }
  }, [post, reset]);

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .replace(/\s+/g, "-")
        .toLowerCase();
    }
    return value;
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), {
          shouldValidate: true,
        });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  const submit = async (data) => {
    try {
      if (post) {
        const file = data.image?.[0] ? await appwrite.uploadFile(data.image[0]) : null;

        if (file) {
          await appwrite.deleteFile(post.featured_image);
        }

        const dbPost = await appwrite.updatePost(
          post.$id,
          data.title,
          data.slug,
          data.content,
          file ? file.$id : post.featured_image,
          data.status
        );

        navigate(`/post/${dbPost.$id}`);
      } else {
        const file = await appwrite.uploadFile(data.image[0]);

        const dbPost = await appwrite.createPost(
          data.title,
          data.slug,
          data.content,
          file.$id,
          data.status,
          userData.$id
        );

        navigate(`/post/${dbPost.$id}`);
      }
    } catch (error) {
      console.error("Submit failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-1"
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && <p className="text-red-600 text-sm mb-3">{errors.title.message}</p>}

        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-1"
          {...register("slug", { required: "Slug is required" })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        {errors.slug && <p className="text-red-600 text-sm mb-3">{errors.slug.message}</p>}

        <div className="mb-2">
          <RTE
            label="Content :"
            name="content"
            control={control}
            defaultValue={getValues("content")}
          />
        </div>
      </div>

      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-1"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", {
            required: post ? false : "Featured image is required",
          })}
        />
        {errors.image && <p className="text-red-600 text-sm mb-3">{errors.image.message}</p>}

        {post?.featured_image && (
          <div className="w-full mb-4">
            <img
              src={appwrite.getFileURL(post.featured_image)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}

        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: "Status is required" })}
        />
        {errors.status && <p className="text-red-600 text-sm mb-3">{errors.status.message}</p>}

        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;